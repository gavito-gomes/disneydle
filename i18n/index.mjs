import en from '~/i18n/en'
import pt from '~/i18n/pt'

const config = {
    'en-US': {
        name: 'English (US)',
        icon: 'us',
        messages: en
    },
    'pt-BR': {
        name: 'Português (BR)',
        icon: 'br',
        messages: pt
    }
}

export const messages = Object.entries(config).reduce(
    (result, [key, config]) => {
        result[key] = config.messages
        return result
    },
    {}
)

export const languages = Object.entries(config).map(([key, config]) => {
    return {
        name: config.name,
        icon: config.icon,
        value: key
    }
})
