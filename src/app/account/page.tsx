import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

const Account = async () => {
    return (
        <div className="dark text-foreground min-h-screen min-w-max">
            <Header>
                <div  className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-mattewhite text-4xl sm:text-5xl lg-7xl font-bold">
                        Account Settings
                    </h1>
                </div>
            </Header>
            <AccountContent />
        </div>
    );
}

export default Account;