'use client'

import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icons } from '@/components/icons';
import { twMerge } from 'tailwind-merge';

type Value = string | number

export type Option = {
    label: React.ReactNode;
    value: Value;
}

type SelectProps = {
    options: Option[];
    placeholder?: string;
    callback: (value: Value) => void;
    defaultValue?: Value;
    className?: string;
}

export type SelectPropsPassThrough = Pick<SelectProps, 'options' | 'placeholder'>

export const Select = (props: SelectProps) => {
    const { options, callback, placeholder, defaultValue = '', className } = props
    const [selected, setSelected] = React.useState<Value>(defaultValue)

    const handleChange = (value: Value) => {
        setSelected(value)
        callback(value)
    }

    const getLabelByValue = (value: Value | undefined) => {
        const option = options.filter((x) => x.value == value)[0]
        return option?.label ?? undefined
    }

    const reset = () => {
        setSelected('')
    }

    return (
        <Listbox value={selected} onChange={handleChange}>
            <div className='relative mt-1 w-full'>
                <Listbox.Button
                    className={twMerge(`
                        w-full 
                        hover:bg-secondary/90 
                        bg-muted-secondary 
                        rounded-md 
                        transition 
                        ease-out
                        cursor-pointer 
                        border
                        border-white/10
                        shadow
                    `,
                        className,
                    )}
                >
                    <div className='flex justify-between items-center px-4 py-2 h-12 text-white'>
                        <div className='flex flex-col items-start'>
                            <p>{placeholder}</p>
                            <span className='text-xs font-medium text-white/70'>
                                {getLabelByValue(selected)}
                            </span>
                        </div>
                        <div>
                            <Icons.chevronUp size={11} strokeWidth={4} />
                            <Icons.chevronDown size={11} strokeWidth={4} />
                        </div>
                    </div>
                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    enter='ease-out duration-200'
                    enterFrom='opacity-0'
                    enterTo="opacity-100"
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options
                        className="
                            absolute 
                            w-full 
                            mt-2 
                            max-h-fit
                            overflow-auto 
                            rounded-md 
                            py-1 
                            text-base 
                            focus:outline-none 
                            sm:text-sm 
                            border
                            border-white/10 
                            shadow
                            bg-muted-secondary
                            z-50
                        "
                    >
                        <div className='flex flex-col w-full h-full px-1'>
                            {options.map((option, idx) => (
                                <Listbox.Option
                                    className="flex py-1 px-2.5 cursor-pointer rounded group"
                                    key={idx}
                                    value={option.value}
                                >
                                    <div className='flex w-full py-[1px] gap-2.5 items-center'>
                                        <span className='text-sm font-medium text-white/70 group-hover:text-white transition'>
                                            {option.label}
                                        </span>
                                    </div>
                                </Listbox.Option>
                            ))}
                        </div>
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
