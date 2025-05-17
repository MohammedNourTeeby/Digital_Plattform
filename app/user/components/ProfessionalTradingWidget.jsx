"use client";

import { useState, useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { 
  Box, Container, Typography, Button, IconButton, 
  TextField, AppBar, Toolbar, Badge, Avatar, 
  Divider, Paper, Grid, Select, MenuItem 
} from '@mui/material';
import { 
  Search, Add, Remove, ZoomIn, ZoomOut, 
  Notifications, AccountBalanceWallet, AccessTime 
} from '@mui/icons-material';

export default function TradingPlatform() {
  const [balance, setBalance] = useState(10000.00);
  const [investment, setInvestment] = useState(50);
  const [tradeDuration, setTradeDuration] = useState("00:05");
  const [currentPrice, setCurrentPrice] = useState(207.3270);
  const [currentTime, setCurrentTime] = useState(new Date());

  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  const generateMockData = () => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < 100; i++) {
      const time = new Date(now.getTime() - (100 - i) * 60000);
      data.push({
        time: Math.floor(time.getTime() / 1000),
        value: 207.3 + (Math.random() * 0.1)
      });
    }
    return data;
  };

  useEffect(() => {
    if (chartContainerRef.current && !chartRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          background: { color: '#151924' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.5)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.5)' },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
        },
      });

      const areaSeries = chart.addAreaSeries({
        topColor: 'rgba(38, 198, 218, 0.56)',
        bottomColor: 'rgba(38, 198, 218, 0.04)',
        lineColor: 'rgba(38, 198, 218, 1)',
        lineWidth: 2,
      });

      const initialData = generateMockData();
      areaSeries.setData(initialData);

      chartRef.current = { chart, areaSeries };

      const priceLine = {
        price: 207.3270,
        color: '#2196F3',
        lineWidth: 2,
        lineStyle: 0,
        axisLabelVisible: true,
        title: '\\\$91.00',
      };

      areaSeries.createPriceLine(priceLine);

      const interval = setInterval(() => {
        const lastData = initialData[initialData.length - 1];
        const newTime = lastData.time + 60;
        const newValue = lastData.value + (Math.random() * 0.02 - 0.01);
        areaSeries.update({ time: newTime, value: newValue });
        setCurrentPrice(newValue.toFixed(4));

        if (initialData.length > 100) initialData.shift();
        initialData.push({ time: newTime, value: newValue });
      }, 1000);

      return () => {
        clearInterval(interval);
        chart.remove();
        chartRef.current = null;
      };
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInvestmentChange = (amount) => {
    const newValue = investment + amount;
    if (newValue >= 10 && newValue <= 5000) {
      setInvestment(newValue);
    }
  };

  const handleTrade = (type) => {
    alert(`تم تنفيذ عملية ${type === 'buy' ? 'شراء' : 'بيع'} بقيمة ${investment}`);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ar-EG', { day: '2-digit', month: 'short' });
  };

  const priceLevels = [
    207.3350, 207.3315, 207.3300, 207.3285, 207.3270, 
    207.3255, 207.3250, 207.3240, 207.3225, 207.3150, 
    207.3050, 207.2950
  ];

  const handleFinancialResourcesClick = () => {
    alert(`الرصيد الحقيقي: ${balance.toFixed(2)}`); // إضافة قوس مغلق هنا
};


  return (
    <Box sx={{ bgcolor: '#151924', minHeight: '100vh' }} className="">
      <AppBar position="static" color="default" elevation={1} >
        <Toolbar >
          <IconButton edge="center" color="inherit">
            <Search />
          </IconButton>
          
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={0} sx={{ px: 2, py: 1, bgcolor: '#f0f0f0', borderRadius: 2 }}>
              <Button onClick={handleFinancialResourcesClick}>
                الموارد المالية
              </Button>
            </Paper>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceWallet sx={{ mr: 1 }} />
              <Typography variant="subtitle1">
                ${balance.toFixed(2)} الرصيد الحقيقي ▾
              </Typography>
            </Box>
            
            <Avatar>S</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ mt: 2 }}  >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Smarty S</Typography>
        </Box>
        
        <Paper elevation={3} sx={{ position: 'relative', mb: 2, p: 1, bgcolor: '#151924' }}>
          <Box sx={{ 
            position: 'absolute', 
            left: 10, 
            top: 10, 
            bottom: 10, 
            width: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 1
          }}>
            {priceLevels.map((price, index) => (
              <Typography 
                key={index} 
                variant="caption" 
                sx={{ 
                  color: price === 207.3270 ? '#2196F3' : '#d1d4dc',
                  fontWeight: price === 207.3270 ? 'bold' : 'normal'
                }}
              >
                {price.toFixed(4)}
              </Typography>
            ))}
          </Box>
          
          <Box 
            ref={chartContainerRef} 
            sx={{ 
              height: 400, 
              width: '100%', 
              ml: '80px' 
            }} 
          />
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2, 
            mt: 1,
            color: 'white'
          }}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ZoomOut />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ZoomIn />
            </IconButton>
          </Box>
        </Paper>
        
        <Paper elevation={3} sx={{ p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime sx={{ mr: 1 }} />
                <Select
                  value={tradeDuration}
                  onChange={(e) => setTradeDuration(e.target.value)}
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="00:05">00:05 مدة الصفقة</MenuItem>
                  <MenuItem value="00:15">00:15 مدة الصفقة</MenuItem>
                  <MenuItem value="00:30">00:30 مدة الصفقة</MenuItem>
                  <MenuItem value="01:00">01:00 مدة الصفقة</MenuItem>
                </Select>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="success" 
                  size="large"
                  onClick={() => handleTrade('buy')}
                  sx={{ px: 4 }}
                >
                  شراء (82%)
                </Button>
                
                <Button 
                  variant="contained" 
                  color="error" 
                  size="large"
                  onClick={() => handleTrade('sell')}
                  sx={{ px: 4 }}
                >
                  بيع (82%)
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <IconButton onClick={() => handleInvestmentChange(-10)}>
                  <Remove />
                </IconButton>
                
                <TextField
                  value={investment}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 10 && value <= 5000) {
                      setInvestment(value);
                    }
                  }}
                  InputProps={{
                    startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    endAdornment: <Typography sx={{ ml: 1 }}>الاستثمار</Typography>
                  }}
                  sx={{ width: 150 }}
                />
                
                <IconButton onClick={() => handleInvestmentChange(10)}>
                  <Add />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">
              {formatDate(currentTime)} {formatTime(currentTime)}
            </Typography>
            
            <Typography variant="body2">
              السعر الحالي: {currentPrice}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
  