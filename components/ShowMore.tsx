"use client";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, {scroll: false});
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Mostrar Más"
          btnType="button"
          containerStyles="bg-primary-yellow rounded-full text-black"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore