import React from 'react';
import Image from 'next/image'; // Using Next.js Image component
import { useRouter } from 'next/router'; // Next.js Router
import { Input, Button } from '../ui';
import { TopNavContainer } from '../styles/StyledContainers';
import { useAppContext } from '@/context/AppContext';
import Icon from '../ui/Icon';
import useWindowWidth from '@/hooks/useWindowWidth';

// Import images using 'next/image' for optimization
import SearchIcon from '@/assets/icons/magnifying-glass.webp';
import NotificationIcon from '@/assets/icons/notification.webp';
import SettingIcon from '@/assets/icons/setting-nav.webp';
import avatar from '@/assets/icons/avatar.webp';
import HamburgerIcon from '@/assets/icons/hamburger.webp';

const TopNav = () => {
  const router = useRouter(); // Replacing useNavigate with Next.js router
  const windowWidth = useWindowWidth();
  const {
    appContext: { pageName, isSideBarVisible } = {},
    setApplicationContext,
  } = useAppContext() || {};

  const handleSettingIconClick = () => {
    setApplicationContext({ pageName: 'Setting' });
    router.push('/settings'); // Use Next.js router for navigation
  };

  const handleHamburgerIconClick = () => {
    setApplicationContext({ isSideBarVisible: !isSideBarVisible });
  };

  return (
    <TopNavContainer role="banner">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center justify-around w-full lg:w-auto text-black-100 text-3xl font-semibold leading-9 font-inter">
          <div className="flex lg:hidden">
            <Icon height="14px" width="18px" onClick={handleHamburgerIconClick}>
              <Image
                src={HamburgerIcon}
                alt="Hamburger Icon"
                width={18}
                height={14}
              />
            </Icon>
          </div>
          {pageName}
          {windowWidth < 1024 && (
            <Button className="p-2" aria-label="User Profile">
              <Image src={avatar} alt="User Avatar" width={45} height={45} />
            </Button>
          )}
        </div>

        <div className="flex items-center justify-center space-x-4 w-full lg:w-auto lg:mr-4">
          <div className="flex items-center border-gray-300 bg-light-gray rounded-full p-2 max-w-xs w-full">
            <Icon height="20px" width="20px" className="mr-2 ml-2">
              <Image
                src={SearchIcon}
                alt="Search Icon"
                width={20}
                height={20}
              />
            </Icon>
            <Input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <Button
            className="p-2 rounded hidden lg:flex"
            aria-label="Settings"
            onClick={handleSettingIconClick}
          >
            <Image
              src={SettingIcon}
              alt="Settings Icon"
              width={56}
              height={56}
            />
          </Button>
          <Button
            className="p-2 rounded hidden lg:flex"
            aria-label="Notifications"
          >
            <Image
              src={NotificationIcon}
              alt="Notification Icon"
              width={56}
              height={56}
            />
          </Button>
          {windowWidth >= 1024 && (
            <Button className="p-2 rounded" aria-label="User Profile">
              <Image src={avatar} alt="User Avatar" width={56} height={56} />
            </Button>
          )}
        </div>
      </div>
    </TopNavContainer>
  );
};

export default React.memo(TopNav);
