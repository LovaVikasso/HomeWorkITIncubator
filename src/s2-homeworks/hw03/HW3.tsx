import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import User from "../hw08/User";

/*
* 1 - описать тип UserType DONE
* 2 - указать нужный тип в useState с users DONE
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами DONE
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов DONE
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами DONE
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) DONE
* 9 - в файле Greeting.tsx дописать типизацию пропсов DONE
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки DONE
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any DONE
    name: string // need to fix any DONE
}

export const pureAddUserCallback = (name: string, setUsers: (users:UserType[]) => void, users: UserType[]) => { // need to fix any DONE
    const user = {// need to fix DONE делаем шаблон нового пользователя
        _id: v1(),
        name:name
    }
    setUsers([...users, user]) //добавляет нового пользователя по образцу впереди старых юзеров
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any DONE

    const addUserCallback = (name: string) => { // need to fix any DONE
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
