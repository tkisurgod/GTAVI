import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-dynamic";

export default function Home() {
  const launchDesign = readFileSync(
    join(process.cwd(), "assets", "code.html"),
    "utf8"
  );

  return (
    <main className="launch-frame">
      <iframe
        title="Leonida Launch event design"
        srcDoc={launchDesign}
        className="launch-frame__document"
      />
    </main>
  );
}
