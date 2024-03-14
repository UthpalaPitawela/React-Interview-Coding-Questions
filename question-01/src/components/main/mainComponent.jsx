import React from "react";
import { useEffect, useState } from "react"
import { getUsers } from "../../services/userService";
import { PaginationComponent } from "../pagination/paginationComponent";
import { UserComponent } from "../user/userComponent";

export const MainComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    useEffect(() => {
       const getUserData = async() => {
        try {
            const allUsers = await getUsers();
            console.log('allUsers', allUsers)
            setUsers(allUsers);
            setTotalPages(allUsers.length);
        } catch (error) {
            
        }
       }

       getUserData();
    },[])

    const changeCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
        <>
        <h1>Pagination </h1>
            {
                users && users.length>0 && <UserComponent user={users[currentPage-1]} />
            }
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
        </>
    )
    
}