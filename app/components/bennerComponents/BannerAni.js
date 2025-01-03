import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import gsap from "gsap";

function ThreeJSBanner() {
  // 核心狀態管理
  const isInteracting = useRef(false);
  const containerRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const letterMeshes = useRef([]);
  const originalPositions = useRef([]);
  const isReturning = useRef(false);
  const text = "BOOM!";

  // 事件處理函數
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    isInteracting.current = true;

    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };

  const handleTouchMove = (event) => {
    if (!containerRef.current || !event.touches[0]) return;
    isInteracting.current = true;

    const rect = containerRef.current.getBoundingClientRect();
    const touch = event.touches[0];
    mouse.current.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
  };

  const handleInteractionEnd = () => {
    isInteracting.current = false;
  };

  // 文字位置計算
  const calculateTextPosition = useCallback(() => {
    if (!containerRef.current) return;

    try {
      const letterSize = 3;
      const letterSpacing = 4;
      const textLength = text.length;
      const totalWidth =
        textLength * letterSize +
        (textLength - 1) * (letterSpacing - letterSize);
      const startX = -totalWidth / 2;
      const xOffset = -8.5;
      const yOffset = -1.5;

      text.split("").forEach((letter, index) => {
        if (letterMeshes.current[index]) {
          const mesh = letterMeshes.current[index];
          const newPos = new THREE.Vector3(
            xOffset + letterSpacing * index,
            yOffset,
            0
          );
          mesh.position.copy(newPos);
          originalPositions.current[index] = newPos.clone();
        }
      });
    } catch (error) {
      console.log("Error calculating text position:", error);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let camera, renderer, scene;
    let animationFrameId;

    // Three.js 場景初始化
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      if (camera) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      if (renderer) {
        renderer.setSize(width, height);
      }
    };

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(0, 5, 2);
    scene.add(mainLight);

    // 字體載入與文字生成
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        if (!containerRef.current) return;

        const materials = [
          new THREE.MeshPhysicalMaterial({
            color: 0xff4500,
            emissive: 0xff3300,
            metalness: 0.95,
            roughness: 0.1,
            envMapIntensity: 1.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
          }),
          new THREE.MeshPhysicalMaterial({
            color: 0xffff00,
            emissive: 0xffcc00,
            metalness: 0.9,
            roughness: 0.15,
            envMapIntensity: 1.5,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
          }),
          new THREE.MeshPhysicalMaterial({
            color: 0xff6347,
            emissive: 0xff2200,
            metalness: 0.85,
            roughness: 0.2,
            envMapIntensity: 1.5,
            clearcoat: 0.9,
            clearcoatRoughness: 0.1,
          }),
        ];

        calculateTextPosition();

        const textGroup = new THREE.Group();
        scene.add(textGroup);

        let xOffset = -8.5;
        let yOffset = -1.5;

        text.split("").forEach((letter, index) => {
          const geometry = new TextGeometry(letter, {
            font: font,
            size: 3,
            depth: 0.4,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.05,
          });
          geometry.computeBoundingBox();

          const mesh = new THREE.Mesh(
            geometry,
            materials[index % materials.length]
          );

          mesh.position.set(xOffset + 4 * index, yOffset, 0);
          textGroup.add(mesh);

          letterMeshes.current.push(mesh);
          originalPositions.current.push(mesh.position.clone());
        });

        window.addEventListener("resize", () => {
          handleResize();
          calculateTextPosition();
        });

        calculateTextPosition();
        camera.position.z = 8;

        // 自動重置動畫
        const resetPositions = () => {
          if (isReturning.current) return;
          isReturning.current = true;

          letterMeshes.current.forEach((mesh, index) => {
            gsap.to(mesh.position, {
              x: originalPositions.current[index].x,
              y: originalPositions.current[index].y,
              z: originalPositions.current[index].z,
              duration: 1.5,
              ease: "power2.out",
            });

            gsap.to(mesh.rotation, {
              x: 0,
              y: 0,
              z: 0,
              duration: 1.5,
              ease: "power2.out",
            });
          });

          setTimeout(() => {
            isReturning.current = false;
          }, 1500);
        };

        setInterval(resetPositions, 3000);

        // 碰撞效果處理
        function handleCollision() {
          raycaster.current.setFromCamera(mouse.current, camera);
          const intersects = raycaster.current.intersectObjects(
            letterMeshes.current
          );

          intersects.forEach((intersect) => {
            const mesh = intersect.object;
            const direction = mesh.position.clone().normalize();

            gsap.to(mesh.position, {
              x: mesh.position.x + direction.x * 2,
              y: mesh.position.y + direction.y * 2,
              z: mesh.position.z + direction.z * 2,
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(mesh.rotation, {
              x: Math.random() * Math.PI,
              y: Math.random() * Math.PI,
              duration: 0.5,
              ease: "power2.out",
            });
          });
        }

        // 動畫循環
        function animate() {
          animationFrameId = requestAnimationFrame(animate);
          handleCollision();
          renderer.render(scene, camera);
        }

        animate();
      }
    );

    // 事件監聽器設置
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    containerRef.current.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    containerRef.current.addEventListener("touchend", handleInteractionEnd);
    containerRef.current.addEventListener("mouseleave", handleInteractionEnd);
    window.addEventListener("mouseup", handleInteractionEnd);

    const timer = setTimeout(() => {
      if (containerRef.current) {
        calculateTextPosition();
      }
    }, 100);

    // 清理函數
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // 資源釋放
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      clearTimeout(timer);
      containerRef.current?.removeEventListener("touchmove", handleTouchMove);
      containerRef.current?.removeEventListener(
        "touchend",
        handleInteractionEnd
      );
      containerRef.current?.removeEventListener(
        "mouseleave",
        handleInteractionEnd
      );
      window.removeEventListener("mouseup", handleInteractionEnd);
    };
  }, [calculateTextPosition]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        pointerEvents: "auto",
        touchAction: "none",
      }}
      // 事件處理綁定
      onTouchStart={(e) => {
        isInteracting.current = true;
        handleTouchMove(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        isInteracting.current = false;
        handleInteractionEnd();
      }}
      onMouseDown={() => {
        isInteracting.current = true;
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
    />
  );
}

export default ThreeJSBanner;
