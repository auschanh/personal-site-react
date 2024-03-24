import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({
  title,
  desc,
  figure,
  chips,
  chipsFooter,
  github,
}) {
  return (
    <Card className="relative flex transform flex-col rounded-2xl bg-[#143260] shadow-xl transition-all hover:scale-105 focus:outline-none">
      <CardHeader color="blue-gray" className="relative">
        {figure}
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="mb-2 text-black dark:text-white">
          <div className="flex items-center gap-2 text-2xl text-black dark:text-white max-sm:flex-col">
            {title}
            {chips}
          </div>
        </Typography>
        <Typography className="text-xl">{desc}</Typography>
      </CardBody>
      <CardFooter className="max-sm:grid-col-2 mt-1 flex flex-wrap items-start justify-end max-sm:grid max-sm:grid-flow-col">
        <div class="max-sm:col-span-1">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-lg fa-github dark:text-white dark:hover:text-gray-600"></i>
          </a>
        </div>
        <div class="ml-auto inline-flex items-center justify-end gap-2 max-sm:col-span-1">
          {chipsFooter}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
