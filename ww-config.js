export default {
    editor: {
        label: 'Select Dropdown',
        icon: 'select',
    },
    inherit: {
        type: 'ww-layout',
    },
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'grid', 'inline-flex', 'inline-grid'],
    },
    states: ['readonly'],
    triggerEvents: [
        { name: 'change', label: { en: 'On change' }, event: { value: '' }, default: true },
        { name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
    ],
    properties: {
        items: {
            bindable: 'repeatable',
            label: {
                en: 'Items',
                fr: 'Items',
            },
            type: 'Info',
            options: {
                text: {
                    en: 'Elements to repeat',
                },
            },
            defaultValue: [],
            hidden: true,
        },
        side: {
            label: { en: 'Side' },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'bottom', label: 'Bottom' },
                    { value: 'left', label: 'Left' },
                    { value: 'top', label: 'Top' },
                    { value: 'right', label: 'Right' },
                ],
            },
            defaultValue: 'bottom',
            // hidden: content => content.autoPosition,
        },
        align: {
            label: { en: 'Align' },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'start', label: 'Start' },
                    { value: 'center', label: 'Center' },
                    { value: 'end', label: 'End' },
                ],
            },
            defaultValue: 'start',
            // hidden: content => content.autoPosition,
        },
        offsetX: {
            label: { en: 'Offset X' },
            type: 'Length',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: -100, max: 100 },
                    { value: '%', label: '%', min: -100, max: 100 },
                ],
            },
            defaultValue: '0px',
        },
        offsetY: {
            label: { en: 'Offset Y' },
            type: 'Length',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: -100, max: 100 },
                    { value: '%', label: '%', min: -100, max: 100 },
                ],
            },
            defaultValue: '0px',
        },
        boundOffset: {
            label: { en: 'Bound offset' },
            type: 'Length',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 0, max: 100 },
                    { value: '%', label: '%', min: 0, max: 100 },
                ],
            },
            defaultValue: '0px',
        },
        slot: {
            hidden: true,
            defaultValue: [],
        },
    },
};
