import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Flex Network',
	description: 'Showcase and Discover remarkable Projects',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
