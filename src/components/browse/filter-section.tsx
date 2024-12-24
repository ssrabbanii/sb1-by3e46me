import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterSectionProps {
  title: string;
  options: Array<string | { label: string; value: string }>;
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function FilterSection({ title, options, selected, onChange }: FilterSectionProps) {
  const handleToggle = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          
          return (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={value}
                checked={selected.includes(value)}
                onCheckedChange={() => handleToggle(value)}
              />
              <Label htmlFor={value}>{label}</Label>
            </div>
          );
        })}
      </div>
    </div>
  );
}