import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({ title, desc, figure }) {
  return (
    <Card className="relative flex transform flex-col rounded-2xl bg-[#143260] shadow-xl transition-all hover:scale-105 focus:outline-none">
      <CardHeader color="blue-gray" className="relative">
        {figure}
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="mb-2 text-black dark:text-white">
          {title}
        </Typography>
        <Typography className="text-xl">{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}

export default ProjectCard;
