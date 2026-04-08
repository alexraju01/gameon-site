import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
	// flex-1 forces this container to stretch, pushing the footer down
	return <main className='flex-1 w-full px-5'>{children}</main>;
};
export default Main;
