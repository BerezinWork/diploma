import { Pagination } from "antd";

import styles from "./PaginationBlock.module.css";

const PaginationBlock = ({ currentPage, totalItems, pageSize, onPageChange }) => {

    if (totalItems <= pageSize) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={pageSize}
                onChange={onPageChange}
                hideOnSinglePage={true}
                showSizeChanger={false}
                align="center"
            />
        </div>
    )
}
export default PaginationBlock;