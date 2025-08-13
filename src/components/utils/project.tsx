import { Project as ProjectProps } from '@/types';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Icons from '../ui/icons';
import { Badge } from '../ui/badge';

interface Props {
  project: ProjectProps;
}

const techStackIcons: { [key: string]: keyof typeof Icons } = {
    "next.js": "nextjs",
    "react": "react",
    "nextjs": "nextjs",
    "tailwindcss": "tailwindcss",
    "tailwind": "tailwindcss",
    "framer motion": "framer",
    "framer-motion": "framer",
    "shadcn/ui": "shadcn",
    "shadcn ui": "shadcn",
    "shadcnui": "shadcn",
    "mongodb": "mongodb",
    "prisma": "prisma",
    "magic ui": "magicui",
    "expo": "expo",
    "firebase": "firebase",
    "figma": "figma",
    "clerk": "clerk",
    "react native": "react",
    "aws(ses)": "aws",
    "zustand": "zustand",
    "gemini": "gemini",
};

const getIconForTech = (tech: string) => {
  const normalizeTech = tech.toLowerCase();
  const iconKey = techStackIcons[normalizeTech];
  if (iconKey && Icons[iconKey]) {
    const Icon = Icons[iconKey];
    return <Icon className="size-3 mr-1" />;
  }
  return null;
};

const Project = ({ project }: Props) => {
  const truncateDescription = (description: string) => {
    const firstFullStopIndex = description.indexOf('.');
    const firstExclamationIndex = description.indexOf('!');

    let truncateIndex = -1;

    if (firstFullStopIndex !== -1 && firstExclamationIndex !== -1) {
      truncateIndex = Math.min(firstFullStopIndex, firstExclamationIndex) + 1;
    } else if (firstFullStopIndex !== -1) {
      truncateIndex = firstFullStopIndex + 1;
    } else if (firstExclamationIndex !== -1) {
      truncateIndex = firstExclamationIndex + 1;
    }

    return truncateIndex !== -1
      ? description.slice(0, truncateIndex)
      : description;
  };

  // Pastikan stack jadi array string
  const stackArray: string[] = Array.isArray(project.stack)
    ? project.stack
    : typeof project.stack === 'string'
    ? project.stack.split(',').map((s: string) => s.trim())
    : [];

  return (
    <div className="w-full rounded-xl">
      <div className="flex flex-col p-2 lg:p-5 space-y-1 ">
        <h4 className="text-lg font-medium">{project.title}</h4>
        <p className="text-sm text-foreground/80 mt-2">
          {truncateDescription(project.description)}
        </p>

        <div className="flex flex-col justify-start space-y-2 lg:justify-between w-full lg:flex-row">
          {/* stack */}
          <div className="flex items-center justify-start flex-wrap gap-2 mt-auto">
            {stackArray.map((item: string, index: number) => (
              <Badge
              variant='secondary'
                key={index}
                className="transition-colors duration-300 ease-in-out py-1 ![--badge-height:1.5rem] bg-neutral-600/70 hover:bg-neutral-700"
              >
                <span className="font-medium text-white flex items-center">
                  {getIconForTech(item)}
                  {item}
                </span>
              </Badge>
            ))}
          </div>

          {/* buttons */}
          <div className="flex gap-x-4 mt-4">
            <Link href={project.github} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-zinc-800 cursor-pointer"
              >
                <Icons.github className="size-4 mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href={project.view} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-zinc-800 cursor-pointer"
              >
                <ExternalLinkIcon className="size-4 mr-2" />
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
