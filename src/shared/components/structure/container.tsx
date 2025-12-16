import type { childrenTypes } from "@/shared/types/childrenTypes";

const Container = ({ children }: childrenTypes) => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;