import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip
} from "@material-tailwind/react";

export function ProjectCard({
  title,
  desc,
  figure,
  chips,
  chipsFooter,
  github,
  linkURL
}) {
  return (
    <Card className="relative flex transform flex-col rounded-2xl bg-white shadow-xl transition-all hover:scale-105 focus:outline-none dark:bg-[#143260]">
      <CardHeader color="blue-gray" className="relative">
        {figure}
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="mb-2 text-black dark:text-white">
          <div className="flex items-center gap-2 text-2xl text-black dark:text-white max-sm:flex-col max-sm:items-start">
            {title}
            {chips}
          </div>
        </Typography>
        <Typography className="text-xl">{desc}</Typography>
      </CardBody>
      <CardFooter className="max-sm:grid-col-2 flex flex-wrap items-start justify-between  sm:mt-1 max-sm:grid max-sm:grid-flow-col">
        <div class="max-sm:col-span-1 flex">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-lg fa-github mr-2 dark:text-white dark:hover:text-gray-600"></i>
          </a>
          {linkURL && 
            <a href={linkURL} target="_blank" rel="noopener noreferrer">
              <Chip
                className="rounded-full hover:bg-purple-300"
                color="purple"
                value="🔗 View"
                size="sm"
                />
            </a>
          }
        </div>
        <div class="ml-auto inline-flex flex-wrap items-center gap-2 sm:justify-end max-sm:col-span-1">
          {chipsFooter}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
