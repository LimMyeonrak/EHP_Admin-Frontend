import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const EChart = () => {
    const gaugeData = [
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '-15%']
            }
        },
        {
            value: 90,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '0%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '15%']
            }
        }
    ];
    const [options, setOptions] = useState({
        // series: [
        //     {
        //         type: 'gauge',
        //         startAngle: 90,
        //         endAngle: -270,
        //         pointer: {
        //             show: false
        //         },
        //         progress: {
        //             show: true,
        //             overlap: false,
        //             roundCap: true,
        //             clip: false,
        //             itemStyle: {
        //                 borderWidth: 1,
        //                 borderColor: '#464646'
        //             }
        //         },
        //         axisLine: {
        //             lineStyle: {
        //                 width: 40
        //             }
        //         },
        //         splitLine: {
        //             show: false,
        //             distance: 0,
        //             length: 10
        //         },
        //         axisTick: {
        //             show: false
        //         },
        //         axisLabel: {
        //             show: false,
        //             distance: 50
        //         },
        //         data: gaugeData,
        //         title: {
        //             fontSize: 10,
        //             show: true
        //         },
        //         detail: {
        //             width: 50,
        //             height: 10,
        //             fontSize: 10,
        //             // color: 'auto',
        //             // borderColor: 'auto',
        //             borderRadius: 20,
        //             borderWidth: 1,
        //             formatter: '{value}%'
        //         }
        //     }
        // ]

        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [25, 125],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
            }
        ]
    });

    return (
        <ECharts
            option={options}
            opts={{ height: 300 }}
            style={{
                height: '100%',
                width: '100%'
            }}
        />
    );
};
export default EChart;
