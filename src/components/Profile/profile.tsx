import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserCookieStore } from "@/store/user-cookie-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitchButton from "../ui/theme-swapper";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/lib/constants";
import { useEffect } from "react";

const Profile = () => {
  const router = useRouter();
  const { decoded } = useUserCookieStore();

  const userEmail = decoded?.email as string;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>
            {userEmail?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userEmail}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Profile</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.replace(PAGE_ROUTES.LOGOUT);
          }}
        >
          Logout
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeSwitchButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
