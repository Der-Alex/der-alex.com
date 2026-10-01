export const useCategory = () => {
  const skip = ref(1);
  const route = useRoute();
  const router = useRouter();
  const itemsToShow = 6;
  const maxPages = ref(1);
  const skipItems = computed(() => itemsToShow * (skip.value - 1));

  const throwNotFound = () => {
    throw createError({
      status: 404,
      statusText: "Seite nicht gefunden",
      fatal: import.meta.client
    });
  };

  if (route.params.page) {
    const pageParam = Array.isArray(route.params.page)
      ? route.params.page
      : [route.params.page];

    if (pageParam.length > 1 || !/^[1-9]\d*$/.test(pageParam[0] ?? "")) {
      throwNotFound();
    }
    skip.value = Number(pageParam[0]);
  }

  const getCount = async (urlPart: string, category: string) => {
    const { data } = await useAsyncData(urlPart, () => {
      let collection = queryCollection("content");
      if (category) {
        collection.where("category", "=", category);
      }
      return collection.count();
    });

    if (data.value) {
      maxPages.value = Math.ceil(data.value / itemsToShow);
    }
  };

  const fetchContent = async (urlPart: string, category: string) => {
    const { data: list } = await useAsyncData(
      `${urlPart}-${skip.value}`,
      () => {
        let collection = queryCollection("content");
        if (category) {
          collection.where("category", "=", category);
        }
        return collection
          .order("created", "DESC")
          .skip(skipItems.value)
          .limit(itemsToShow)
          .all();
      }
    );

    if (skip.value > 1 && !list.value?.length) {
      throwNotFound();
    }

    return list;
  };

  const clickPrevHandler = (urlPart: string) => {
    skip.value--;
    if (skip.value <= 1) {
      skip.value = 1;
      return router.push({ path: `/${urlPart}` });
    }
    router.push({ path: `/${urlPart}/${skip.value}` });
  };

  const clickNextHandler = (urlPart: string) => {
    if (skip.value >= maxPages.value) return;
    skip.value++;

    router.push({ path: `/${urlPart}/${skip.value}` });
  };

  return {
    skipItems,
    itemsToShow,
    clickNextHandler,
    clickPrevHandler,
    getCount,
    fetchContent,
    skip,
    maxPages
  };
};
