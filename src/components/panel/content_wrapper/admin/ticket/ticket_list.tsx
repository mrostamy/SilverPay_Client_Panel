
import { Backdrop, CircularProgress, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { useInjection } from "../../../../../ioc.react";
import { TicketService } from "../../../../../services/panel/user/ticket_service";
import Ticket from "./ticket"

import * as _ from 'lodash'

const TicketList = () => {

    const ticket_service = useInjection(TicketService);

    useEffect(() => {
        ticket_service.getTickets("5", 2);

        return () => {

        }
    },[])






    return (
        <>

            <InfiniteScroll
                dataLength={5}
                next={() => { }}
                endMessage={<><p>No More Data!</p></>}
                hasMore={false}
                loader={
                    <Backdrop open={true}>
                        <LinearProgress />
                        <CircularProgress />
                    </Backdrop>}
            >

                <Ticket />
            </InfiniteScroll>

        </>
    )
}

export default TicketList;