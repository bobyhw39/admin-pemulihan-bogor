export interface DefaultRoot {
  data: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface RootState {
  auth: AuthRoot;
  categories: DefaultRoot;
  product: ProductRoot;
  banner: DefaultRoot;
  user: UserRoot;
  chat: ChatRoot;
  infoWisata: ProductRoot;
  faq: DefaultRoot;
}
export interface AuthRoot {
  formData: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface ProductRoot {
  data: any;
  dataSearch: any;
  dataCount: any;
  dataId: any;
  isLoading: any;
  isLoadingSearch: any;
  isError: any;
  message: any;
}
export interface ChatRoot {
  dataMessage: any;
  inputMessage: any;
  userList: any;
  selectedUserID: any;
  isLoading: any;
  isMessageLoading: any;
  isSendLoading: any;
  isError: any;
  messageRes: any;
}
export interface UserRoot {
  data: any;
  datas: any;
  isLoading: any;
  isError: any;
  message: any;
}
