import { useCallback, useEffect, useRef } from "react";
import styles from "./flat-list.module.scss";

interface FlatListProps<T> {
    listStyle?: React.CSSProperties;
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    keyExtractor?: (item: T, index: number) => string;
    ListEmptyComponent?: React.ReactNode;
    ListHeaderComponent?: React.ReactNode;
    ListFooterComponent?: React.ReactNode;
    horizontal?: boolean;
    className?: string;
    onEndReached?: () => void; // викликається, коли дійшли до кінця
    onEndReachedThreshold?: number; // відстань у px до низу
    isLoading?: boolean; // щоб показувати спінер під час підвантаження
}

export function FlatList<T>({
    data,
    renderItem,
    keyExtractor,
    ListEmptyComponent,
    ListHeaderComponent,
    ListFooterComponent,
    horizontal = false,
    className = "",
    onEndReached,
    onEndReachedThreshold = 200,
    isLoading = false,
    listStyle,
}: FlatListProps<T>) {
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback(() => {
        if (!listRef.current || !onEndReached) return;

        const { scrollTop, scrollHeight, clientHeight } = listRef.current;

        if (scrollHeight - scrollTop - clientHeight <= onEndReachedThreshold) {
            onEndReached();
        }
    }, [onEndReached, onEndReachedThreshold]);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    if (!data || data.length === 0) {
        return <>{ListEmptyComponent || null}</>;
    }

    return (
        <div
            ref={listRef}
            className={`${styles.list}${className} ${horizontal ? styles.horizontal : styles.vertical}`}
            style={listStyle}
        >
            {ListHeaderComponent && <div>{ListHeaderComponent}</div>}

            {data.map((item, index) => (
                <div key={keyExtractor ? keyExtractor(item, index) : index.toString()}>
                    {renderItem(item, index)}
                </div>
            ))}

            {isLoading && <div className="text-center p-2">Loading...</div>}

            {ListFooterComponent && <div>{ListFooterComponent}</div>}
        </div>
    );
}