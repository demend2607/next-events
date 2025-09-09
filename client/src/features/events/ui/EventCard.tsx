"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { EventoEvent } from "@prisma/client";

const MotionLink = motion.create(Link);

export default function EventCard({ event }: { event: EventoEvent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      className="h-[380px] max-w-[400px] flex-1 basis-80"
      href={`/event/${event.slug}`}
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <section className=" w-full h-full flex flex-col  bg-white/[3%] rounded-xl overflow-hidden relative general-effects">
        <Image src={event.imageUrl} alt={event.name} width={400} height={280} className="h-[60%] object-fit" />
        <div className="absolute top-3 left-3 w-[45px] h-[45px] flex flex-col  text-center bg-black/30 rounded-md ">
          <p className="text-xl font-bold -mb-[5px]">{new Date(event.date).toLocaleDateString("en-US", { day: "2-digit" })}</p>
          <p className="text-xs uppercase text-general">{new Date(event.date).toLocaleString("en-US", { month: "short" })}</p>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-bold ">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm mt-4 text-white/50">{event.location}</p>
        </div>
      </section>
    </MotionLink>
  );
}
