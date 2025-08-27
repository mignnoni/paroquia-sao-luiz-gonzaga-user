import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { toaster } from '@/components/ui/toaster';
import { LocationsHeader } from '@/components/Locations/locations-header';
import { LocationsSection } from '@/components/Locations/locations-section';
import type { IOtherSchedule } from '@/interfaces/IOtherSchedule';
import { OtherScheduleTypes } from '@/constants/OtherScheduleTypes';

export function Sacraments() {
    const [sacraments, setSacraments] = useState<IOtherSchedule[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMassLocations = () => {
            api.get<IOtherSchedule[]>('other-schedules', {
                params: {
                    type: OtherScheduleTypes.Sacrament,
                },
            })
                .then((response) => {
                    setSacraments(response.data);
                })
                .catch(() => {
                    toaster.error({ title: 'Erro ao buscar sacramentos' });
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        fetchMassLocations();
    }, []);

    return (
        <>
            <LocationsHeader headquarters={headquarters} isLoading={isLoading} />
            <LocationsSection locations={locations} isLoading={isLoading} />
        </>
    );
}
