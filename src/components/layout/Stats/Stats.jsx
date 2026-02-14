import StatWidget from "../../widgets/StatWidget/StatWidget";
import { ClipboardList, Droplet, Footprints, Moon } from "lucide-react";

export default function Stats({ data }) {
  return (
    <div className="flex justify-between gap-2 md:gap-3 lg:gap-6">
      <StatWidget
        title="Sleep"
        icon={<Moon className="w-full h-full" color="#00E6B0" />}
        subtitle="Target: 8 hours"
        valueDisplay="50%"
        progress={4}
        type="segmented"
        segments={8}
      />
      <StatWidget
        title="Water"
        icon={<Droplet className="w-full h-full" color="#00E6B0" />}
        subtitle="Target: 6 cups / 2L"
        valueDisplay="4/6"
        progress={4}
        type="segmented"
        segments={6}
      />
      <StatWidget
        title="Steps"
        icon={<Footprints className="w-full h-full" color="#00E6B0" />}
        subtitle="Target: 8k steps"
        valueDisplay="30%"
        progress={30}
        type="solid"
      />
      <StatWidget
        title="Tasks"
        icon={<ClipboardList className="w-full h-full" color="#00E6B0" />}
        subtitle="Total: 4 tasks"
        valueDisplay="4 / 4"
        progress={4}
        type="segmented"
        segments={4}
      />
    </div>
  );
}
