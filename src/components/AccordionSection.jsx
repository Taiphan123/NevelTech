/* eslint-disable react/prop-types */
import { ArrowDownIcon } from "../SVGs";

const AccordionSection = ({ title, items, isOpen, onClick }) => {
  return (
    <div>
      <h3
        className="flex justify-between text-[15px] font-medium mb-5 cursor-pointer"
        onClick={onClick}
      >
        {title}
        <ArrowDownIcon className={`${isOpen ? "transform rotate-180" : ""}`} />
      </h3>
      {isOpen && (
        <ul className="space-y-5 mb-3 text-[#90A2BD]">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccordionSection;