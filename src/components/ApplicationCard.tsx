import { classNames } from "@/utils/common"
import { Menu, Transition } from "@headlessui/react"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

export default function ApplicationCard(props: { application: any }) {
  const statuses = {
    Paid: 'text-green-700 bg-blue-50 ring-green-600/20',
    Approved: 'text-green-700 bg-green-50 ring-green-600/20',
    Pending: 'text-gray-600 bg-yellow-50 ring-gray-500/10'
  };

  const application = props.application;

  return (
    <>
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img
          src={application.imageUrl}
          alt={application.name}
          className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
        />
        <div className="text-sm font-medium leading-6 text-gray-900">{application.name}</div>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Submitted On</dt>
          <dd className="text-gray-700">
            <time dateTime={application.dateTime}>{application.date}</time>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Amount</dt>
          <dd className="flex items-start gap-x-2">
            <div className="font-medium text-gray-900">{application.amount}</div>
            <div
              className={classNames(
                statuses[application.status],
                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
              )}
            >
              {application.status}
            </div>
          </dd>
        </div>
      </dl>
    </>
  )
}
