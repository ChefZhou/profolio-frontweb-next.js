"use client";

import { tools } from "../config/toolsConfig";
import ToolBoxItem from "../components/ToolBoxItem";

export default function Tools() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-4 pt-20">
      <h1 className="text-center font-[Orbitron] tracking-wider text-4xl font-bold mb-8">
        Tools Box
      </h1>
      <div className="flex flex-wrap gap-4 justify-center max-w-7xl">
        {tools.map((tool, index) => (
          <ToolBoxItem
            key={index}
            icon={tool.icon}
            name={tool.name}
            color={tool.color}
          />
        ))}
      </div>
    </div>
  );
}
