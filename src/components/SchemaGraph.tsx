import type { SchemaNode } from "@/lib/schema";
import { schemaGraph } from "@/lib/schema";

type SchemaGraphProps = {
  nodes: SchemaNode[];
};

export function SchemaGraph({ nodes }: SchemaGraphProps) {
  const data = schemaGraph(nodes);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}