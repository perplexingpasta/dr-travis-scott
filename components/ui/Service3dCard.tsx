"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";

interface ServiceCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  children,
}) => {
  return (
    <CardContainer className="-mt-40 max-w-[90%] md:max-w-full">
      <CardBody className="group/card relative h-full w-auto rounded-lg border-2 bg-white p-6 shadow-lg md:border-0">
        {/* <CardItem translateZ="100" className="h-[12rem] w-full"> */}
        <CardItem translateZ="100" className="relative mx-auto h-48 w-48">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={imgAlt}
              // fill
              // sizes="100vw"
              width={192}
              height={192}
              className="aspect-square rounded-lg object-cover drop-shadow-xl group-hover/card:shadow-xl"
            />
          )}
        </CardItem>
        <CardItem translateZ="50" className="mx-auto mt-4 text-lg font-semibold md:text-xl">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 text-center opacity-70"
        >
          {description}
        </CardItem>
        {children}
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard;
