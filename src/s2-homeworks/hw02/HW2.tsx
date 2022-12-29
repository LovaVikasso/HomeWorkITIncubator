import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType DONE
* 2 - указать нужный тип для defaultAffairs DONE
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами DONE
* 4 - выполнить пункт 3 для функции deleteAffair DONE
* 5 - указать нужный тип в useState с affairs DONE
* 6 - дописать тип и логику функции deleteAffairCallback DONE
* 7 - в файле Affairs.tsx дописать типизацию пропсов DONE
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow DONE
* 9 - в файле Affair.tsx дописать типизацию пропсов DONE
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать DONE
* 11 - в файле Affair.tsx отобразить приходящие данные DONE
* */

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number // need to fix any DONE
    name: string // need to fix any DONE
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any DONE
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any DONE

    return affairs.filter(el => filter !== 'all' ? el.priority === filter : el)
    // need to fix DONE
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any DONE

    return affairs.filter(a => a._id !== _id) // need to fix DONE
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any DONE
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        // setAffairs(affairs.filter((item: AffairType) => item._id !== _id))
        deleteAffair(affairs, _id) //остановилось здесь!

        // need to fix DONE
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
