import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Language = () => {
  return (
    <div className="mr-4">
      <Select defaultValue="tr">
        <SelectTrigger className="w-[60px] p-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="start" className=" w-[100px] min-w-20">
          <SelectGroup>
            <SelectItem value="tr">
              <Image src={"/flags/tr.svg"} alt="tr" width={30} height={30} />
            </SelectItem>
            <SelectItem value="en">
              <Image src={"/flags/en.svg"} alt="en" width={30} height={30} />
            </SelectItem>
            <SelectItem value="ru">
              <Image src={"/flags/ru.svg"} alt="ru" width={30} height={30} />
            </SelectItem>
            <SelectItem value="de">
              <Image src={"/flags/de.svg"} alt="de" width={30} height={30} />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
