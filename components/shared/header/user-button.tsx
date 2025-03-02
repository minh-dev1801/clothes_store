import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-8 h-8 rounded-full bg-gray-200 flex-center">
          M
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium leading-none">MinhNV181</div>
            <div className="text-sm text-muted-foreground leading-none">
              Minh181@gmail.com
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <form action="" className="w-full">
            <Button className="w-full py-4 px-2 h-4" variant="ghost">
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
