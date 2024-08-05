import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { WorkspaceOption } from "@/interface";
import { Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const WorkspaceCard: React.FC<WorkspaceOption> = ({
  title,
  description,
  price,
  priceDetail,
  features,
  image,
  cta,
  ctaSecondary,
}) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white rounded-xl">
    <div className="hidden md:block relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center mb-4 text-green-600">
        <DollarSign className="w-5 h-5 mr-2" />
        <span className="font-bold text-lg">{price}</span>
        <span className="text-sm text-gray-500 ml-1">{priceDetail}</span>
      </div>
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center text-sm text-gray-600 mb-2"
        >
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span>{feature}</span>
        </div>
      ))}
    </CardContent>
    <CardFooter className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-3">
      <Button className="w-full sm:w-auto">{cta}</Button>
      <Button variant="outline" className="w-full sm:w-auto">
        {ctaSecondary}
      </Button>
    </CardFooter>
  </Card>
);
