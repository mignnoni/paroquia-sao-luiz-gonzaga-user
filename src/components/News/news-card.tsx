import type { INews } from '@/interfaces/INews';
import { Box, Stack, Text } from '@chakra-ui/react';
import { LuCirclePlus } from 'react-icons/lu';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface INewsCardProps {
    news: INews;
}

// Função para remover tags HTML e criar preview do texto
function stripHtmlAndCreatePreview(htmlContent: string, maxLength: number = 150): string {
    // Remove todas as tags HTML
    const textContent = htmlContent.replace(/<[^>]*>/g, '');

    // Remove espaços extras e quebras de linha
    const cleanText = textContent.replace(/\s+/g, ' ').trim();

    // Limita o texto ao tamanho máximo
    if (cleanText.length <= maxLength) {
        return cleanText;
    }

    // Corta o texto e adiciona "..." se necessário
    return cleanText.substring(0, maxLength) + '...';
}

export function NewsCard({ news }: INewsCardProps) {
    const contentPreview = stripHtmlAndCreatePreview(news.content);
    const navigate = useNavigate();
    return (
        <Box w="full">
            <Stack rounded={'2xl'} p={4} bg={'white'} w={'full'} align={'flex-start'} gap={5}>
                <Text fontWeight={700} fontSize={'lg'} color={'#F69F53'}>
                    {news.title}
                </Text>
                <Text fontSize={'sm'} color={'gray.700'} lineClamp={3} fontStyle={'italic'}>
                    {contentPreview}
                </Text>
                <Button
                    rounded={'full'}
                    fontSize={'sm'}
                    bg={'#0D3D71'}
                    color={'white'}
                    _hover={{ bg: '#1B4D85' }}
                    onClick={() => navigate(`/avisos/${news.id}`)}
                >
                    <LuCirclePlus />
                    ver info completa
                </Button>
            </Stack>
        </Box>
    );
}
