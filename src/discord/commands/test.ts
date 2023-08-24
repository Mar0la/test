import { Command } from '@discord/base'
import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js'

export default new Command({
  name: 'example',
  description: 'Example command',
  dmPermission: false,
  type: ApplicationCommandType.ChatInput,
  async run ({ interaction }) {
    const oi = '1asd'
    void interaction.reply({ ephemeral: true, content: 'This is a example command!' })
  }
})
