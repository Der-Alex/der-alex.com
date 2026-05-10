export const useCategory = () => {
  const skip = ref(1);
  const route = useRoute();
  const router = useRouter();
  const itemsToShow = 6;
  const maxPages = ref(1);
  const skipItems = computed(() => itemsToShow * (skip.value - 1));

  if (route.params.page) {
    if (Array.isArray(route.params.page)) {
      skip.value = Number(route.params.page[0]);
    } else {
      skip.value = Number(route.params.page);
    }
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

    return list;
  };

  const clickPrevHandler = (urlPart: string) => {
    skip.value--;
    if (skip.value <= 1) {
      skip.value = 1;
      return router.push({ path: `/${urlPart}/` });
    }
    router.push({ path: `/${urlPart}/${skip.value}` });
  };

  const clickNextHandler = (urlPart: string) => {
    if (skip.value > maxPages.value) return;
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
