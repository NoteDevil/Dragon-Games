import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import useUser from "../../lib/hooks/useUser";
import { User } from "@nextui-org/user";

/**
 * Renders the Navbars component with user-specific content and actions.
 *
 * @return {JSX.Element} The rendered Navbars component
 */
export default function Navbars() {
  const { user } = useUser();

  return (
    <Navbar>
      <NavbarBrand>
        <h3 className="uppercase text-[#ff4a57]">Dragon Games</h3>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          {!user && (
            <Button
              as={Link}
              color="primary"
              href="/api/auth/login"
              variant="flat"
            >
              Войти
            </Button>
          )}
          {user && (
            <div className="flex gap-3 items-center">
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: user.avatarUrl,
                    }}
                    className="transition-transform"
                    description="Administrator"
                    name={user.username}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@{user.username}</p>
                  </DropdownItem>
                  <DropdownItem key="settings">
                    <Link href="/adminpanel">Админ панель</Link>
                  </DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    href="/api/auth/logout"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
