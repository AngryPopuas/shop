

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="w-full flex flex-row justify-center">
            {children}
        </div>
    );
}
