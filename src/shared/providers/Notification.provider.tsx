import React, { createContext, useContext, useEffect } from "react";
import { notification } from "antd";
import type { NotificationInstance } from "antd/es/notification/interface";

let notificationApi: NotificationInstance | null = null;

export const getNotification = () => {
    if (!notificationApi) {
        throw new Error("Notification API is not initialized yet!");
    }
    return notificationApi;
};

const NotificationContext = createContext<NotificationInstance | null>(null);

export const useNotification = () => {
    const ctx = useContext(NotificationContext);
    if (!ctx) throw new Error("useNotification must be used within NotificationProvider");
    return ctx;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        notificationApi = api;
    }, [api]);

    return (
        <NotificationContext.Provider value={api}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};
