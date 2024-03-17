import type { QueryBuilderParams } from '@nuxt/content/types';

export const useCategory = async (urlPart: string, category: string) => {
  const skip = ref(1);
  const route = useRoute();
  const router = useRouter();
  const itemsToShow = 6;
  let maxPages = 1;
  const whereParam = {} as any;
  if (category.length > 0) {
    whereParam['category'] = category;
  }

  const { data } = await useAsyncData(urlPart, () =>
    queryContent('/').where(whereParam).count()
  );

  if (data.value) {
    maxPages = Math.ceil(data.value / itemsToShow);
  }

  if (Array.isArray(route.params.page) && route.params.page.length > 0) {
    console.log('page array pos 0 is', route.params.page[0]);
    skip.value = parseInt(route.params.page[0] as string);
  } else if (
    typeof route.params.page === 'string' &&
    route.params.page.length > 0
  ) {
    console.log('page string is', route.params.page);
    skip.value = parseInt(route.params.page);
  }

  const query: QueryBuilderParams = reactive({
    path: '/',
    where: [whereParam],
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
