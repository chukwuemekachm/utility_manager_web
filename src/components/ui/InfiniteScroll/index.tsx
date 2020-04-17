import * as React from 'react';
import { SettingObjectType } from 'store/reducers/setting';
const { useCallback, useRef } = React;

interface InfiniteScrollPrpos {
  children: (composedProps) => React.ReactNode;
  retrievedData: SettingObjectType;
  fetchData: (payload) => void;
  params: Record<string, any>;
}
function InfiniteScroll(props: InfiniteScrollPrpos) {
  type Observer = {
    current?: IntersectionObserver;
  };

  const { children, retrievedData, fetchData, params } = props;
  const observer: Observer = useRef();
  const lastItemRef = useCallback(
    node => {
      if (retrievedData.fetching) return;
      if (!observer) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          const paginatorMeta = retrievedData.meta;
          if (paginatorMeta && !retrievedData.fetching && paginatorMeta.currentPage < paginatorMeta.totalPages) {
            fetchData({
              params: {
                ...params,
                pageNumber: paginatorMeta.currentPage + 1,
              },
            });
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [retrievedData],
  );
  function composeProps() {
    return {
      lastItemRef,
      data: retrievedData.data,
    };
  }
  return <>{children(composeProps())}</>;
}

export default InfiniteScroll;
