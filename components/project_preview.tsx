import Image from "next/image";
import Link from "next/link";
import cn from 'classnames';

// An interface/class for props
export interface ProjectPreviewInterface {
    title: string;
    description: string;
    linkUrl: string;
    image: string;
    gradiant: string
}

const ProjectPreview = (props: ProjectPreviewInterface) => {

    return (
    <Link href={props.linkUrl}>
      <a
        className={cn(
          'transform hover:scale-[1.03] transition-all',
          'rounded-xl w-full md:w-full bg-gradient-to-r p-1',
          props.gradiant
        )} 
      >
        <div className="flex flex-col justify-between h-full w-full bg-white rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 ">
              {props.title}
            </h4>
          </div>
          <div className="flex items-center text-gray-800 capsize">
            More
          </div>
        </div>
      </a>
    </Link>
    )
}

export default ProjectPreview;