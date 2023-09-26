export const TimeDivider = ({ time }: { time: string }) => {
    return (
        <div className="opacity-50 flex justify-between items-center gap-2">
            <hr className="flex-grow text-black-custom" />
            {time}
            <hr className="flex-grow text-black-custom" />
        </div>
    );
};
