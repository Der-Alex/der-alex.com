export const useCategory = async (urlPart: string, category: string) => {
  const skip = ref(1);
  const route = useRoute();
  const router = useRouter();
  const itemsToShow = 6;
  let maxPages = 1;
  const whereParam = {} as any;
  if (category.length > 0) {
    whereParam['field'] = 'category';
    whereParam['operator'] = '=';
    whereParam['value'] = category;
  }

  const { data } = await useAsyncData(urlPart, () => {
    return category.length > 0
      ? queryCollection('content').where('category', '=', category).count()
      : queryCollection('content').count();
  });

  if (data.value) {
    maxPages = Math.ceil(data.value / itemsToShow);
  }

  if (Array.isArray(route.params.page) && route.params.page.length > 0) {
    skip.value = parseInt(route.params.page[0] as string);
  } else if (
    typeof route.params.page === 'string' &&
    route.params.page.length > 0
  ) {
    skip.value = parseInt(route.params.page);
  }

  const query: any = reactive({
    path: '/',
    where: whereParam,
    skip: itemsToShow * (skip.value - 1),
    limit: itemsToShow,
    sort: [{ created: -1 }],
  });

  const clickPrevHandler = () => {
    skip.value--;
    if (skip.value <= 1) {
      skip.value = 1;
      router.push({ path: `/${urlPart}/` });
      return false;
    }
    router.push({ path: `/${urlPart}/${skip.value}` });
  };
  const clickNextHandler = () => {
    skip.value++;
    if (skip.value > maxPages) {
      skip.value = maxPages;
    }
    router.push({ path: `/${urlPart}/${skip.value}` });
  };

  return { query, clickNextHandler, clickPrevHandler, skip, maxPages };
};
