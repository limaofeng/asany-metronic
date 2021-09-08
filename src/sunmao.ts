import { ILibraryDefinition, library } from 'sunmao';

@library({
  name: 'canvas',
  description: '测试库',
  namespace: 'cn.asany.ui.theme.metronic',
})
class Canvas {}

const canvas = new Canvas();

export default ([canvas] as any) as ILibraryDefinition[];
