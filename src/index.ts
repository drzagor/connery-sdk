import { PluginDefinition, setupPluginServer } from 'connery';
import sendEmail from './actions/sendEmail.js';

const pluginDefinition: PluginDefinition = {
  name: 'Gmail',
  description: 'A plugin that contains actions to work with Gmail',
  actions: [sendEmail],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
