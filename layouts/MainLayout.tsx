import React from 'react';
import clsx from 'clsx';
import {LeftMenu} from '../components/LeftMenu/LeftMenu';
import {SideComments} from '../components/SideComments/SideComments';

interface MainLayoutProps {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    className?: string;
    hideMenu?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> =
    ({
         children,
         contentFullWidth,
         hideComments,
         hideMenu,
         className,
     }) => {

        return (
            <div className={clsx('wrapper', className)}>
                {!hideMenu &&
                    <div className="leftSide">
                        <LeftMenu/>
                    </div>
                }
                <div className={clsx('content', {'content--full': contentFullWidth})}>{children}</div>

                {!hideComments && (
                    <div className="rightSide">
                        <SideComments/>
                    </div>
                )}
            </div>
        );
    };
