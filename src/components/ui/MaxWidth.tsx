import type { MaxWidthProps } from "../../types/children";

const MaxWidth = ({ children }: MaxWidthProps) => {
    return (
        <div className="max-w-[1920px] mx-auto">
            {children}
        </div>
    );
}
export default MaxWidth;